import os

structure = {
    "public": {
        "images": {}
    },

    "src": {

        "assets": {
            "logos": {},
            "icons": {},
            "images": {}
        },

        "components": {

            "layout": [
                "Header.tsx",
                "Footer.tsx",
                "MobileMenu.tsx",
                "PageShell.tsx"
            ],

            "ui": [
                "Button.tsx",
                "Card.tsx",
                "Badge.tsx",
                "Input.tsx",
                "Select.tsx",
                "Textarea.tsx",
                "Modal.tsx"
            ],

            "home": [
                "Hero.tsx",
                "ServicesGrid.tsx",
                "FeaturedProducts.tsx",
                "WhyChooseUs.tsx",
                "Testimonials.tsx",
                "CTASection.tsx"
            ],

            "orders": [
                "OrderForm.tsx",
                "QuoteCalculator.tsx",
                "UploadDesign.tsx",
                "OrderSummary.tsx"
            ],

            "gallery": [
                "GalleryGrid.tsx",
                "GalleryFilter.tsx",
                "ProjectCard.tsx"
            ],

            "shared": [
                "LanguageToggle.tsx",
                "SectionTitle.tsx",
                "ScrollToTop.tsx",
                "LoadingSpinner.tsx"
            ]
        },

        "pages": {
            "admin": [
                "AdminLoginPage.tsx",
                "DashboardPage.tsx",
                "OrdersPage.tsx",
                "ProductsPage.tsx",
                "GalleryManagerPage.tsx"
            ],

            "_files": [
                "HomePage.tsx",
                "ServicesPage.tsx",
                "CustomOrderPage.tsx",
                "ShopPage.tsx",
                "GalleryPage.tsx",
                "AboutPage.tsx",
                "FAQPage.tsx",
                "ContactPage.tsx",
                "NotFoundPage.tsx"
            ]
        },

        "routes": [
            "AppRouter.tsx",
            "ProtectedRoute.tsx",
            "routePaths.ts"
        ],

        "hooks": [
            "useLanguage.ts",
            "useScrollAnimation.ts",
            "useLocalStorage.ts",
            "useOrderForm.ts"
        ],

        "context": [
            "LanguageContext.tsx",
            "ThemeContext.tsx"
        ],

        "store": [
            "uiStore.ts",
            "orderStore.ts"
        ],

        "services": {
            "supabase": [
                "client.ts",
                "orders.ts",
                "products.ts",
                "gallery.ts"
            ],

            "_files": [
                "email.ts",
                "whatsapp.ts"
            ]
        },

        "i18n": {
            "locales": {
                "en": [
                    "common.json",
                    "home.json",
                    "services.json",
                    "orders.json",
                    "gallery.json",
                    "contact.json"
                ],

                "geo": [
                    "common.json",
                    "home.json",
                    "services.json",
                    "orders.json",
                    "gallery.json",
                    "contact.json"
                ]
            },

            "_files": [
                "index.ts"
            ]
        },

        "data": [
            "services.ts",
            "sampleProducts.ts",
            "testimonials.ts",
            "faq.ts"
        ],

        "lib": [
            "cn.ts",
            "formatPrice.ts",
            "validators.ts",
            "constants.ts"
        ],

        "styles": [
            "globals.css",
            "animations.css"
        ],

        "types": [
            "product.ts",
            "order.ts",
            "gallery.ts",
            "i18n.ts"
        ],

        "_files": [
            "App.tsx",
            "main.tsx",
            "vite-env.d.ts"
        ]
    }
}


def create_structure(base, struct):
    for name, content in struct.items():

        if name == "_files":
            for file in content:
                path = os.path.join(base, file)
                open(path, "w").close()
            continue

        path = os.path.join(base, name)

        if isinstance(content, dict):
            os.makedirs(path, exist_ok=True)
            create_structure(path, content)

        elif isinstance(content, list):
            os.makedirs(path, exist_ok=True)
            for file in content:
                file_path = os.path.join(path, file)
                open(file_path, "w").close()


create_structure(".", structure)

print("Project structure created successfully.")