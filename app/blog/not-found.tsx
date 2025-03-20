import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogNotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-grow bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-h1 mb-6">Page Not Found</h1>
            <div className="text-[24px] font-bold text-link mb-6">404</div>
            <p className="text-body mb-8">
              We couldn't find the page you're looking for. The article might
              have been moved, deleted, or never existed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/blog" variant="primary">
                Browse All Articles
              </Button>
              <Button href="/" variant="secondary">
                Return Home
              </Button>
            </div>

            <div className="mt-16 border-t border-gray-200 pt-8">
              <h2 className="text-h2 mb-4">Popular Categories</h2>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Link
                  href="/blog/category/personal-finance"
                  className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Personal Finance
                </Link>
                <Link
                  href="/blog/category/credit-cards"
                  className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Credit Cards
                </Link>
                <Link
                  href="/blog/category/mortgages"
                  className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Mortgages
                </Link>
                <Link
                  href="/blog/category/investing"
                  className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Investing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
