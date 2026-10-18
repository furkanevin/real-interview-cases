import { Suspense } from "react";
import { notFound } from "next/navigation";
import RecipeList from "@/components/RecipeList";
import Container from "@/components/ui/Container";
import BackButton from "@/components/ui/BackButton";
import RecipeListSkeleton from "@/components/skeletons/RecipeListSkeleton";

// Cache revalidation period (1 minute = 60 seconds)
export const revalidate = 60;

// Only validate if at least one search parameter is provided
const validateSearchParams = (params: {
  [key: string]: string | string[] | undefined;
}) => {
  const { query, cuisine, maxReadyTime } = params;
  return Boolean(query || cuisine || maxReadyTime);
};

interface RecipesPageProps {
  // Next.js 15'te searchParams bir Promise olarak gelir
  searchParams: Promise<{
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
  }>;
}

// Main page component
export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const params = await searchParams;

  // If no valid search parameters are provided, return 404
  if (!validateSearchParams(params)) {
    return notFound();
  }

  const { query, cuisine, maxReadyTime } = params;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="mb-4">
          <BackButton variant="link" href="/" />
        </div>
        <Suspense fallback={<RecipeListSkeleton />}>
          <RecipeList
            query={query}
            cuisine={cuisine}
            maxReadyTime={maxReadyTime}
          />
        </Suspense>
      </Container>
    </main>
  );
}
