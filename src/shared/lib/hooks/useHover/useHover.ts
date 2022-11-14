import { useCallback, useMemo, useState } from 'react';

type useHoverBind = {
  onMouseEntry: () => void
  onMouseLeave: () => void
}

export type useHoverResult = [boolean, useHoverBind]

export function useHover(): useHoverResult {
  const [isHover, setIsHover] = useState(false);

  const onMouseEntry = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(() => ([
    isHover,
    {
      onMouseEntry,
      onMouseLeave,
    },
  ]), [isHover, onMouseEntry, onMouseLeave]);
}
