/**
 * Utility functions
 */
import {
  groupBy,
  orderBy,
  toPairs,
} from 'lodash-es';

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

/**
 * Convert list of texts to threads
 */
export const toThreads = (texts: ShareText.Text[]): ShareText.TextThread[] => {
  const groupedTexts = groupBy(texts, text => text.sender);
  const pairedTexts  = toPairs<{}, ShareText.Text[]>(groupedTexts);
  const orderedPairs = orderBy<ShareText.TextThread>(pairedTexts, pair => {
    const [ ,messages ] = pair;
    return messages[0].date;
  }, 'desc');
  return orderedPairs;
}
