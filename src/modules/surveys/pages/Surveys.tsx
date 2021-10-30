import { FilterSelect } from '@/components/common/FilterSelect';
import * as LC from '@/components/LC';
import { Page } from '@/components/Page';
import { Searchbar } from '@/components/Searchbar';
export const Surveys = () => {
  return (
    <Page title="Enquetes">
      <LC.Horizontal>
        <Searchbar placeholder="Pesquisar..." />
        <FilterSelect title="Time" queryParam="team" />
      </LC.Horizontal>
    </Page>
  );
};
