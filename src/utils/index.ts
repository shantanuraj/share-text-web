/**
 * Utility functions
 */

/**
 * Simple event value extractor callback
 * @param fn - Callback to execute with string value
 */
export const onEvent = (fn: (val: string) => void) => {
  return (event: Event) => {
    const target = event.target as HTMLInputElement;
    fn(target.value);
  };
};
