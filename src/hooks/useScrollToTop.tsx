import React, {useEffect} from 'react';

export function useScrollToTop(trigger?: string) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [trigger]);
}
