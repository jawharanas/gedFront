import { ring } from "ldrs";

ring.register();

export default function LoadingSpinner() {
  return (
    <l-ring size="50" stroke="5" bg-opacity="0" speed="2" color="red"></l-ring>
  );
}
