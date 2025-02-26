import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((segment) => segment);

  return (
    <nav className="flex items-center space-x-1 text-gray-700 ml-2">
      {/* Breadcrumbs List */}
      <ol className="flex items-center space-x-1">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const formattedSegment = segment.replace(/-/g, " ");

          return (
            <li key={href} className="flex items-center">
              <span className="mx-1 text-gray-400">/</span> {/* Separator */}
              {index < pathSegments.length - 1 ? (
                <Link href={href} className="text-blue-600 hover:underline">
                  {formattedSegment}
                </Link>
              ) : (
                <span className="text-gray-500">{formattedSegment}</span> // Last item is plain text
              )}
            </li>
          );
        })}
      </ol>

      {/* Back Button - Placed at the End */}
      {pathSegments.length > 0 && (
        <>
          <span className="mx-2 text-gray-400">|</span> {/* Separator */}
          <button
            onClick={() => router.back()}
            className="text-blue-600 hover:underline flex items-center"
          >
            ← Back
          </button>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
