import { useState } from 'react';
import { useCookies } from 'react-cookie';

const useAsyncResponse = (api, onSuccess, onError) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cookies] = useCookies(['auth']);

  /**
   * Call this. On resolve, it will call either onSuccess or onError
   * @param  {...any} args
   */
  const callAsyncFunction = (...args) => {
    setIsLoading(true);
    api(...args, cookies).then(resolveAsyncResponse);
  };

  const resolveAsyncResponse = (response) => {
    setIsLoading(false);
    if (response?.status === 200) {
      onSuccess(response);
      return;
    }
    onError(response);
  };

  /**
   * Call this when you want a promise returned. The onsuccess/onerror will not be called in this function
   * @param  {...any} args
   * @returns
   */
  const callAsyncFunctionPromise = async (...args) => {
    setIsLoading(true);
    return api(...args, cookies).then((response) => {
      setIsLoading(false);
      return response;
    });
  };
  return { callAsyncFunction, callAsyncFunctionPromise, isLoading };
};
export default useAsyncResponse;
