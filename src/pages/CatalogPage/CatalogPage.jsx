import { useSelector } from 'react-redux';
import CatalogForm from '../../components/CatalogForm/CatalogForm';
import CatalogList from '../../components/CatalogList/CatalogList';
import Loader from '../../components/Loader/Loader';
import { StyledContainer } from '../../components/SharedLayout/SharedLayout.styled';
import { selectIsLoading } from '../../redux/cars/selectors';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <section>
      <StyledContainer>
        <title>Catalog</title>
        <CatalogForm />
        <CatalogList />
      </StyledContainer>
      <Loader loading={isLoading} />
    </section>
  );
};

export default CatalogPage;
