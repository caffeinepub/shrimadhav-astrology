import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactEntry } from '../backend';
import type { Principal } from '@dfinity/principal';

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

export function useGetContactSubmissions() {
    const { actor, isFetching } = useActor();

    return useQuery<Array<[Principal, Array<ContactEntry>]>>({
        queryKey: ['adminContactSubmissions'],
        queryFn: async () => {
            if (!actor) return [];
            return actor.adminGetAllContacts();
        },
        enabled: !!actor && !isFetching,
        retry: false,
    });
}

export function useGetNewsletterSubscribers() {
    const { actor, isFetching } = useActor();

    return useQuery<Array<string>>({
        queryKey: ['adminNewsletterSubscribers'],
        queryFn: async () => {
            if (!actor) return [];
            return actor.adminGetAllNewsletterEmails();
        },
        enabled: !!actor && !isFetching,
        retry: false,
    });
}
