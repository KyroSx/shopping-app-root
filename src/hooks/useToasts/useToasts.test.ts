import { toast } from 'react-toastify';
import { useToasts } from '@/hooks/useToasts/useToasts';
import { Screen } from '@/utils/testing/screen';

jest.mock('react-toastify');

type SetupInput = {
  message: string;
};

describe(useToasts, () => {
  const renderHook = () => Screen.renderHook(useToasts);

  const setUp = ({ message }: SetupInput) => {
    const hook = renderHook();

    return {
      hook,
      message,
    };
  };

  describe('success', () => {
    it('calls toast', async () => {
      const { hook, message } = setUp({ message: 'success-message' });

      hook.result.current.success(message);

      expect(toast.success).toHaveBeenCalledWith(message);
    });
  });

  describe('error', () => {
    it('calls toast', async () => {
      const { hook, message } = setUp({ message: 'error-message' });

      hook.result.current.error(message);

      expect(toast.error).toHaveBeenCalledWith(message);
    });
  });
});
