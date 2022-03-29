import { toast } from 'react-toastify';

export function useToasts() {
  const success = (message: string) => {
    toast.success(message);
  };

  const error = (message: string) => {
    toast.error(message);
  };

  return {
    success,
    error,
  };
}
