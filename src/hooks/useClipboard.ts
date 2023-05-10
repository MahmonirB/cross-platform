import Clipboard from '@react-native-community/clipboard';
import { useToast } from 'react-native-toast-notifications';

function useClipboard() {
  const toast = useToast();

  const getClipboard = async () => {
    const content = await Clipboard.getString();
    return content;
  };

  const setToClipboard = (text: string) => {
    Clipboard.setString(text);
    toast.show('Copied!');
  };

  return [getClipboard, setToClipboard];
}

export default useClipboard;
