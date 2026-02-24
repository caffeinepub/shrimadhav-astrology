import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitContact() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
            name,
            email,
            phone,
            message,
        }: {
            name: string;
            email: string;
            phone: string;
            message: string;
        }) => {
            if (!actor) throw new Error('Actor not initialized');
            return actor.submitContactEntry(name, email, phone, message);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
        },
    });
}

export function useSubscribeNewsletter() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (email: string) => {
            if (!actor) throw new Error('Actor not initialized');
            return actor.subscribeNewsletter(email);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['newsletter'] });
        },
    });
}
