import { InsuranceView } from '@/components/insurances/insurance-view';

export default function InsurancesPage({
  searchParams
}: {
  searchParams?: { tab?: string };
}) {
  const tab = (searchParams?.tab === 'govt' || searchParams?.tab === 'private') 
    ? searchParams.tab 
    : 'all';
  return <InsuranceView initialTab={tab} />;
}
