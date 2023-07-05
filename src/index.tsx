export default function MyComponent(
  props: React.HTMLAttributes<HTMLDivElement>
): JSX.Element {
  return <div {...props}>Hello World</div>;
}
