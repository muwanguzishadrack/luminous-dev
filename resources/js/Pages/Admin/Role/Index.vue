<template>
    <AppLayout>
        <div class="bg-white md:bg-inherit pt-10 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] h-full md:overflow-y-auto">
            <div class="flex justify-between">
                <div>
                    <h1 class="text-xl mb-1">{{ $t('Admin roles') }}</h1>
                    <p class="mb-6 flex items-center text-sm leading-6 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"/></svg>
                        <span class="ml-1 mt-1">{{ $t('Manage roles') }}</span>
                    </p>
                </div>
                <div>
                    <Link href="/admin/team/roles/create" class="rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">{{ $t('Add role') }}</Link>
                </div>
            </div>
            <RoleTable :rows="props.rows" :filters="props.filters" />
        </div>
    </AppLayout>
</template>
<script setup>
    import AppLayout from "./../Layout/App.vue";
    import { Link } from "@inertiajs/vue3";
    import RoleTable from '@/Components/Tables/RoleTable.vue';

    const props = defineProps({ title: String, rows: Object, filters: Object });
</script>