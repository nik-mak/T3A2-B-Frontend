import renderer from "react-test-renderer";
import ListingCard from "../components/catalogue/ListingCard";
import TestContextWrapper from "../!TestingComponents/TestContextWrapper";


it("Can be rendered", () => {
  const component = renderer.create(
    <TestContextWrapper user={{name:"Test", email:"test@test", role:"staff"}}>
      <ListingCard
        heading="Test Heading"
        size="Test Size"
        price={50}
        imageURL=""
        itemID="1"
      />
    </TestContextWrapper>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
