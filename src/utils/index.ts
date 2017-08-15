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

/**
 * Get placeholder image for sender
 *
 */
export const getAvatar = (sender: string) =>
  `https://via.placeholder.com/32/000000/ffffff?text=${sender.slice(0, 2)}`;
