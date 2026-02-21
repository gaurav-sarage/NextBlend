import fs from 'fs/promises';
import path from 'path';
import ComponentPreview from '@/app/components/ComponentPreview';
import { getCategoryComponents, getComponent } from '@/lib/registry';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export async function generateMetadata({ params }) {
    const category = getCategoryComponents(params.category);
    return {
        title: `${category?.title || 'Components'} - NextBlend`,
    };
}

export default async function CategoryPage({ params }) {
    const category = getCategoryComponents(params.category);

    if (!category) {
        return <div className="min-h-screen flex items-center justify-center">Category not found</div>;
    }

    // Load code for all components in this category
    const componentsWithCode = await Promise.all(
        category.components.map(async (comp) => {
            try {
                const filePath = path.join(process.cwd(), comp.path);
                const code = await fs.readFile(filePath, 'utf8');
                return { ...comp, code };
            } catch (error) {
                console.error("Failed to load code for", comp.id, error);
                return { ...comp, code: "// Code not found or unable to load" };
            }
        })
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-50/30 dark:bg-gray-950">
            <Navbar />
            <main className="flex-1 py-12 md:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">{category.title}</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Browse and copy our collection of {category.title.toLowerCase()}. Click preview to see them in action.
                    </p>
                </div>

                <div className="space-y-24">
                    {componentsWithCode.map((comp) => {
                        const Component = getComponent(comp.id);
                        if (!Component) return null;

                        return (
                            <ComponentPreview
                                key={comp.id}
                                id={comp.id}
                                title={comp.title}
                                code={comp.code}
                            >
                                <Component />
                            </ComponentPreview>
                        );
                    })}
                </div>
            </main>
            <Footer />
        </div>
    );
}
