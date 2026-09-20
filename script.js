// قائمة المنحوتات
const sculpturesData = [
    {
        id: 1,
        title: "Deep Sea Angler Headpiece",
        material: "Mixed Media",
        year: "2026",
        image: "angler_cutout.jpg",
        description: "Studio display of the hand-sculpted mask, showcasing detailed teeth, illuminated lure, and rich red patina."
    },
    {
        id: 2,
        title: "Angler Mask Performance",
        material: "Mixed Media",
        year: "2026",
        image: "angler_street.jpg",
        description: "Interactive public sculpture exhibition and urban performance piece."
    },
    {
        id: 3,
        title: "Anatomical Form Study",
        material: "Clay & Plaster",
        year: "2025",
        image: "clay_study1.jpg",
        description: "Exploration of organic lines and motion cast in white plaster finish."
    }
];

// دالة التشغيل المستقرة
function initGallery() {
    const materialFiltersContainer = document.getElementById("materialFilters");
    const galleryGrid = document.getElementById("galleryGrid");

    if (!galleryGrid || !materialFiltersContainer) return;

    const materials = ["All Materials", ...new Set(sculpturesData.map(item => item.material))];

    // عرض الأزرار
    materialFiltersContainer.innerHTML = materials.map((mat, index) => `
        <button class="filter-btn ${index === 0 ? 'active' : ''}" data-material="${mat}">
            ${mat}
        </button>
    `).join('');

    // عرض المعرض
    function renderGallery(selectedMaterial = "All Materials") {
        const filteredData = selectedMaterial === "All Materials"
            ? sculpturesData 
            : sculpturesData.filter(item => item.material === selectedMaterial);

        galleryGrid.innerHTML = filteredData.map(item => `
            <div class="card">
                <div class="card-img-container">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Sculpture+Image'">
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

    // إضافة أحداث الضغط للفلترة
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const selectedMaterial = e.target.getAttribute('data-material');
            renderGallery(selectedMaterial);
        });
    });

    renderGallery();
}

// التأكد من تشغيل الكود سواء تم تحميل الصفحة أم لا
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
} else {
    initGallery();
}
