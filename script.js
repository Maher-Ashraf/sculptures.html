// =========================================================
// قائمة المنحوتات المكتملة (هنا نضيف المنحوتات الجديدة)
// =========================================================
const sculpturesData = [
    {
        id: 1,
        title: "Deep Sea Angler Headpiece",
        material: "Mixed Media",
        year: "2026",
        image: "Fish.jpg",
        description: "A wearable sculpture inspired by the deep-sea Anglerfish, blending fine art with conceptual performance. Hand-sculpted with intricate textural details, menacing teeth, and a functional glowing lure, this piece transforms the wearer into a mythical creature of the dark, exploring themes of isolation and hidden identity."
    }
];

// =========================================================
// كود البرمجة التلقائي (لا يحتاج لتعديل)
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
    const materialFiltersContainer = document.getElementById("materialFilters");
    const galleryGrid = document.getElementById("galleryGrid");

    if (!galleryGrid || !materialFiltersContainer) return;

    // استخراج الخامات بدون تكرار
    const materials = ["All Materials", ...new Set(sculpturesData.map(item => item.material))];

    // إنشاء أزرار الفلترة
    function renderMaterialFilters() {
        materialFiltersContainer.innerHTML = materials.map((mat, index) => `
            <button class="filter-btn ${index === 0 ? 'active' : ''}" data-material="${mat}">
                ${mat}
            </button>
        `).join('');

        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const selectedMaterial = e.target.getAttribute('data-material');
                renderGallery(selectedMaterial);
            });
        });
    }

    // عرض المنحوتات في الشبكة
    function renderGallery(selectedMaterial = "All Materials") {
        const filteredData = selectedMaterial === "All Materials"
            ? sculpturesData 
            : sculpturesData.filter(item => item.material === selectedMaterial);

        galleryGrid.innerHTML = filteredData.map(item => `
            <div class="card">
                <div class="card-img-container">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="card-info">
                    <div class="card-badges">
                        <span class="badge-year">${item.year}</span>
                        <span class="badge-material">${item.material}</span>
                    </div>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-description">${item.description}</p>
                </div>
            </div>
        `).join('');
    }

    renderMaterialFilters();
    renderGallery();
});
