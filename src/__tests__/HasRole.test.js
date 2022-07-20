import renderer from "react-test-renderer";
import TestContextWrapper from "../!TestingComponents/TestContextWrapper";
import HasRole from "../components/auth/HasRole";

it("renders when the user role matches a role in the roles prop", () => {
  const component = renderer.create(
    <TestContextWrapper
      user={{ name: "Test", email: "test@test", role: "staff" }}
    >
      <HasRole roles={["staff"]}>TEST</HasRole>
    </TestContextWrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("doesn't render when the user role doesn't match a role in the roles prop", () => {
  const component = renderer.create(
    <TestContextWrapper
      user={{ name: "Test", email: "test@test", role: "admin" }}
    >
      <HasRole roles={["staff"]}>TEST</HasRole>
    </TestContextWrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("doesn't render when the user role doesn't match a role in an empty roles prop", () => {
  const component = renderer.create(
    <TestContextWrapper
      user={{ name: "Test", email: "test@test", role: "admin" }}
    >
      <HasRole roles={[]}>TEST</HasRole>
    </TestContextWrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("doesn't render when the user is undefined", () => {
  const component = renderer.create(
    <TestContextWrapper user={undefined}>
      <HasRole roles={["admin"]}>TEST</HasRole>
    </TestContextWrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders when the user role full roles prop", () => {
  const component = renderer.create(
    <TestContextWrapper user={undefined}>
      <HasRole roles={["admin", "customer", "dragon"]}>TEST</HasRole>
    </TestContextWrapper>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
