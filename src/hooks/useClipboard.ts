import { WEB_ENV } from '@app/config';
import Clipboard from '@react-native-community/clipboard';
import { useToast } from 'react-native-toast-notifications';

function useClipboard() {
  const toast = useToast();

  const getClipboard = async () => {
    if (!WEB_ENV) {
      const content = await Clipboard.getString();
      return content;
    }
    const text = await navigator.clipboard.readText();
    return text;
  };

  const setToClipboard = async (text: string) => {
    if (!WEB_ENV) {
      Clipboard.setString(text);
    } else {
      await navigator.clipboard.writeText(text);
    }
    toast.show('Copied!');
  };

  return [getClipboard, setToClipboard];
}

export default useClipboard;
