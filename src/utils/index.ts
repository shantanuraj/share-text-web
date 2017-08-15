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
 * Get placeholder image for address
 *
 */
export const getAvatar = (address: string) =>
  `https://via.placeholder.com/32/000000/ffffff?text=${address.slice(0, 2)}`;

/**
 * Convert list of texts to threads
 */
export const toThreads = (texts: ShareText.Text[]): ShareText.TextThread[] => {
  const groupedTexts = groupBy(texts, text => text.thread);
  const pairedTexts  = toPairs<{}, ShareText.Text[]>(groupedTexts);
  const orderedPairs = orderBy<ShareText.TextThread>(pairedTexts, pair => {
    const [ ,texts ] = pair;
    return texts[0].date;
  }, 'desc');
  return orderedPairs;
}

/**
 * Filter threads by query
 */
export const filterThreads = (threads: ShareText.TextThread[], query: string) => {
  const query_ = query.toLowerCase();

  if(!query_) {
    return threads;
  }

  const filteredMessages = threads
    .map(thread => {
      const [
        threadId,
        texts,
      ] = thread;
      return [
        threadId,
        texts.filter(text =>
          // Filter by text message address
          text.address.toLocaleLowerCase().includes(query_) ||
          // Filter by text message body
          text.message.toLowerCase().includes(query_)
        ),
      ] as ShareText.TextThread;
    })
    .filter(([, messages]) => messages.length > 0);

  return filteredMessages;
}
