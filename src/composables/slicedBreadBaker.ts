import {readonly, ref} from "vue";
const DEFAULT_DURATION = 3000
export type ToastDto = {
    id: number;
    message?: string;
    duration?: number;
    dismiss: () => void
}

type ToastsData = Array<ToastDto>

export type ToastOptions = Omit<ToastDto, "id" | "dismiss">

const state = ref<ToastsData>([]);

const defaultOptions: ToastOptions = {
    message: "Default message",
    duration: DEFAULT_DURATION
}
const dismiss = (id: number) => {
    state.value = state.value.filter((t) => t.id !== id);
}

const addToast = (options: ToastOptions = defaultOptions): ToastDto => {
    const id = Math.random() * 10000 * Math.random();

    const toast: ToastDto = {...defaultOptions, ...options, id, dismiss: () => dismiss(id)}

    state.value.push(toast);

    if (!toast.duration || toast.duration < 0) {
        return toast
    }

    setTimeout(() => {
        dismiss(id)
    }, toast.duration);

    return toast
};

const useSlicedBreadBaker = () => {
    return {toasts: readonly(state), addToast, dismiss};
};
export {useSlicedBreadBaker}