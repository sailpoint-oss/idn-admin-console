export const reports = [
	{
		url: '/home/source-account-create-error',
		name: 'Source Account Create Error',
		description:
			'This report will show all source accounts for which there is a create error associated with the source',
	},
	{
		url: '/home/identity-inactive-but-has-access',
		name: 'Inactive Identities With Access',
		description:
			'This report will show all identities that are inactive but still have access in sources',
	},
	{
		url: '/home/missing-cloud-life-cycle-state',
		name: 'Missing Cloud Life Cycle State',
		description:
			'This report will show all identities that are missing a cloud life cycle state',
	},
	{
		url: '/home/source-delete-threshold',
		name: 'Sources Delete Threshold',
		description: 'This report will show all sources and their delete threshold',
	},
	{
		url: '/home/source-owner-configured',
		name: 'Sources Owner Configured',
		description: 'This report will show all sources and their configured owners',
	},
	{
		url: '/home/source-aggregations',
		name: 'Source Aggregations',
		description: 'This report will show all sources and their most recent aggregation events',
	},
];
