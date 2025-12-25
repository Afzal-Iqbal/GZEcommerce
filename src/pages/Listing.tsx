
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Listing: React.FC = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 999999]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(['Samsung', 'Apple', 'Poco']);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['Metallic']);
  const [minRating, setMinRating] = useState<number>(0);
  const [condition, setCondition] = useState<string>('Any');
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brands: true,
    features: true,
    priceRange: true,
    condition: true,
    ratings: true,
    manufacturer: true
  });

  const categories = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.category))), []);
  const brands = ["Samsung", "Apple", "Huawei", "Poco", "Lenovo"];
  const features = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesRating = p.rating >= minRating;
      const matchesBrand = selectedBrands.length > 0 ? selectedBrands.some(b => p.name.includes(b)) : true;
      return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesBrand;
    });
  }, [searchQuery, selectedCategory, priceRange, selectedBrands, minRating]);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  const removeBrand = (brand: string) => setSelectedBrands(prev => prev.filter(b => b !== brand));
  const removeFeature = (feature: string) => setSelectedFeatures(prev => prev.filter(f => f !== feature));
  
  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedFeatures([]);
    setMinRating(0);
    setSelectedCategory(null);
    setPriceRange([0, 999999]);
  };

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <div className="container mx-auto px-4 py-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-[13px] text-text-muted mb-4">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="material-icons-outlined text-[14px] mx-2 text-gray-400">chevron_right</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Clothings</span>
          <span className="material-icons-outlined text-[14px] mx-2 text-gray-400">chevron_right</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Men's wear</span>
          <span className="material-icons-outlined text-[14px] mx-2 text-gray-400">chevron_right</span>
          <span className="text-gray-500 font-normal">Summer clothing</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Sidebar */}
          <aside className="w-full lg:w-60 flex-shrink-0 space-y-1">
            {/* Category Section */}
            <div className="bg-transparent border-t border-border-main">
              <button onClick={() => toggleSection('category')} className="w-full flex items-center justify-between py-3 text-left">
                <span className="font-bold text-[15px] text-text-main">Category</span>
                <span className={`material-icons-outlined text-gray-400 text-sm transition-transform ${expandedSections.category ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              {expandedSections.category && (
                <ul className="space-y-3 pb-4 text-[15px] text-gray-600">
                  <li className="hover:text-primary cursor-pointer">Mobile accessory</li>
                  <li className="hover:text-primary cursor-pointer">Electronics</li>
                  <li className="hover:text-primary cursor-pointer">Smartphones</li>
                  <li className="hover:text-primary cursor-pointer">Modern tech</li>
                  <li className="text-primary cursor-pointer font-medium pt-1">See all</li>
                </ul>
              )}
            </div>

            {/* Brands Section */}
            <div className="bg-transparent border-t border-border-main">
              <button onClick={() => toggleSection('brands')} className="w-full flex items-center justify-between py-3 text-left">
                <span className="font-bold text-[15px] text-text-main">Brands</span>
                <span className={`material-icons-outlined text-gray-400 text-sm transition-transform ${expandedSections.brands ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              {expandedSections.brands && (
                <div className="space-y-3 pb-4">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} />
                      <span className="text-[15px] text-gray-600 group-hover:text-primary">{brand}</span>
                    </label>
                  ))}
                  <button className="text-primary hover:underline text-[15px] font-medium pt-1">See all</button>
                </div>
              )}
            </div>

            {/* Features Section */}
            <div className="bg-transparent border-t border-border-main">
              <button onClick={() => toggleSection('features')} className="w-full flex items-center justify-between py-3 text-left">
                <span className="font-bold text-[15px] text-text-main">Features</span>
                <span className={`material-icons-outlined text-gray-400 text-sm transition-transform ${expandedSections.features ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              {expandedSections.features && (
                <div className="space-y-3 pb-4">
                  {features.map(f => (
                    <label key={f} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" checked={selectedFeatures.includes(f)} onChange={() => {}} />
                      <span className="text-[15px] text-gray-600 group-hover:text-primary">{f}</span>
                    </label>
                  ))}
                  <button className="text-primary hover:underline text-[15px] font-medium pt-1">See all</button>
                </div>
              )}
            </div>

            {/* Price Range */}
            <div className="bg-transparent border-t border-border-main">
              <button onClick={() => toggleSection('priceRange')} className="w-full flex items-center justify-between py-3 text-left">
                <span className="font-bold text-[15px] text-text-main">Price range</span>
                <span className={`material-icons-outlined text-gray-400 text-sm transition-transform ${expandedSections.priceRange ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              {expandedSections.priceRange && (
                <div className="pb-4 space-y-4">
                  <div className="relative h-6 flex items-center mt-2">
                    <div className="absolute w-full h-1 bg-[#AFD0FF] rounded-full"></div>
                    <div className="absolute left-[10%] right-[30%] h-1 bg-primary rounded-full"></div>
                    <div className="absolute left-[10%] w-5 h-5 bg-white border border-[#AFD0FF] rounded-full shadow-sm -ml-2.5"></div>
                    <div className="absolute right-[30%] w-5 h-5 bg-white border border-[#AFD0FF] rounded-full shadow-sm -mr-2.5"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <span className="text-[14px] text-text-main mb-1 block">Min</span>
                      <input type="number" placeholder="0" className="w-full border border-border-main rounded-md p-2 text-sm bg-white outline-none" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[14px] text-text-main mb-1 block">Max</span>
                      <input type="number" placeholder="999999" className="w-full border border-border-main rounded-md p-2 text-sm bg-white outline-none" />
                    </div>
                  </div>
                  <button className="w-full py-2 bg-white border border-border-main text-primary font-bold rounded-lg hover:bg-gray-50 transition-all shadow-sm">Apply</button>
                </div>
              )}
            </div>

            {/* Condition */}
            <div className="bg-transparent border-t border-border-main">
              <button onClick={() => toggleSection('condition')} className="w-full flex items-center justify-between py-3 text-left">
                <span className="font-bold text-[15px] text-text-main">Condition</span>
                <span className={`material-icons-outlined text-gray-400 text-sm transition-transform ${expandedSections.condition ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              {expandedSections.condition && (
                <div className="space-y-3 pb-4">
                  {['Any', 'Refurbished', 'Brand new', 'Old items'].map(item => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="radio" name="cond" className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-primary transition-all cursor-pointer" checked={condition === item} onChange={() => setCondition(item)} />
                        {condition === item && <div className="absolute inset-0 m-auto w-2.5 h-2.5 bg-primary rounded-full pointer-events-none"></div>}
                      </div>
                      <span className="text-[15px] text-gray-600 group-hover:text-primary">{item}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Ratings */}
            <div className="bg-transparent border-t border-border-main">
              <button onClick={() => toggleSection('ratings')} className="w-full flex items-center justify-between py-3 text-left">
                <span className="font-bold text-[15px] text-text-main">Ratings</span>
                <span className={`material-icons-outlined text-gray-400 text-sm transition-transform ${expandedSections.ratings ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              {expandedSections.ratings && (
                <div className="space-y-3 pb-4">
                  {[5, 4, 3, 2].map(star => (
                    <label key={star} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" checked={minRating === star} onChange={() => setMinRating(prev => prev === star ? 0 : star)} />
                      <div className="flex text-orange-400">
                        {[1, 2, 3, 4, 5].map(i => (
                          <span key={i} className={`material-icons text-[18px] ${i <= star ? 'text-[#FF9017]' : 'text-[#BDC4CD]'}`}>star</span>
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
            
            <div className="bg-transparent border-t border-border-main last:border-b-0">
               <button onClick={() => toggleSection('manufacturer')} className="w-full flex items-center justify-between py-3 text-left">
                <span className="font-bold text-[15px] text-text-main">Manufacturer</span>
                <span className={`material-icons-outlined text-gray-400 text-sm transition-transform ${expandedSections.manufacturer ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
            </div>
          </aside>

          {/* Listing Area */}
          <div className="flex-1 space-y-4">
            {/* Top Bar */}
            <div className="bg-white border border-border-main rounded-md p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <span className="text-[16px] text-text-main">
                  {filteredProducts.length.toLocaleString()} items in <span className="font-bold">Mobile accessory</span>
                </span>
                <label className="flex items-center gap-2 cursor-pointer ml-4">
                  <input type="checkbox" checked={verifiedOnly} onChange={() => setVerifiedOnly(!verifiedOnly)} className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
                  <span className="text-[16px] text-text-main">Verified only</span>
                </label>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select className="appearance-none bg-white border border-border-main rounded-md px-3 py-2 pr-10 text-[16px] text-text-main focus:ring-1 focus:ring-primary outline-none cursor-pointer h-10">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                  </select>
                  <span className="material-icons absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                </div>
                <div className="flex border border-border-main rounded-md overflow-hidden bg-white shadow-sm h-10">
                  <button onClick={() => setViewType('grid')} className={`w-10 h-full flex items-center justify-center transition-colors ${viewType === 'grid' ? 'bg-[#EFF2F4]' : 'bg-white text-gray-400'}`}>
                    <span className="material-icons-outlined">grid_view</span>
                  </button>
                  <button onClick={() => setViewType('list')} className={`w-10 h-full flex items-center justify-center border-l border-border-main transition-colors ${viewType === 'list' ? 'bg-[#EFF2F4]' : 'bg-white text-gray-400'}`}>
                    <span className="material-icons-outlined">list</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Active Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {selectedBrands.map(b => (
                <div key={b} className="flex items-center gap-2 px-3 py-1 bg-white border border-primary rounded-md text-text-main text-[14px]">
                  {b} <span onClick={() => removeBrand(b)} className="material-icons text-gray-400 text-[16px] cursor-pointer hover:text-red-500">close</span>
                </div>
              ))}
              {selectedFeatures.map(f => (
                <div key={f} className="flex items-center gap-2 px-3 py-1 bg-white border border-primary rounded-md text-text-main text-[14px]">
                  {f} <span onClick={() => removeFeature(f)} className="material-icons text-gray-400 text-[16px] cursor-pointer hover:text-red-500">close</span>
                </div>
              ))}
              {minRating > 0 && (
                <div className="flex items-center gap-2 px-3 py-1 bg-white border border-primary rounded-md text-text-main text-[14px]">
                  {minRating} star <span onClick={() => setMinRating(0)} className="material-icons text-gray-400 text-[16px] cursor-pointer hover:text-red-500">close</span>
                </div>
              )}
              {(selectedBrands.length > 0 || selectedFeatures.length > 0 || minRating > 0) && (
                <button onClick={clearAllFilters} className="text-primary text-[14px] font-medium ml-2 hover:underline">Clear all filter</button>
              )}
            </div>

            {/* Products Grid */}
            {viewType === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map(p => (
                  <div key={p.id} className="bg-white border border-border-main rounded-md overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
                    <div className="h-48 flex items-center justify-center p-6 border-b border-border-main relative bg-white">
                      <img alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" src={p.image} />
                    </div>
                    <div className="p-4 flex flex-col flex-1 relative">
                      <button className="absolute top-4 right-4 text-primary border border-border-main rounded-lg w-9 h-9 flex items-center justify-center hover:bg-blue-50 transition-colors shadow-sm">
                        <span className="material-icons-outlined text-[20px]">favorite_border</span>
                      </button>
                      
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[18px] font-bold text-text-main">${p.price.toFixed(2)}</span>
                        {p.originalPrice && <span className="text-[14px] text-gray-400 line-through">${p.originalPrice.toFixed(2)}</span>}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-orange-400">
                           {[1, 2, 3, 4, 5].map(i => (
                             <span key={i} className={`material-icons text-[14px] ${i <= Math.floor(p.rating) ? 'text-[#FF9017]' : 'text-[#BDC4CD]'}`}>star</span>
                           ))}
                        </div>
                        <span className="text-orange-500 text-[14px] font-medium">{p.rating}</span>
                      </div>

                      <h3 className="text-[15px] text-gray-600 line-clamp-2 leading-relaxed mb-3 group-hover:text-primary transition-colors">{p.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View implementation as per original style but cleaner */
              <div className="space-y-4">
                {filteredProducts.map(p => (
                  <div key={p.id} className="bg-white border border-border-main rounded-md flex h-[230px] overflow-hidden hover:shadow-md transition-all group">
                    <div className="w-60 h-full flex items-center justify-center p-6 bg-white border-r border-border-main flex-shrink-0">
                      <img alt={p.name} className="max-h-full max-w-full object-contain" src={p.image} />
                    </div>
                    <div className="flex-1 p-5 relative">
                      <button className="absolute top-4 right-4 w-10 h-10 border border-border-main rounded-lg flex items-center justify-center bg-white shadow-sm hover:text-primary hover:border-primary transition-all active:scale-95 group/fav">
                        <span className="material-icons-outlined text-[24px]">favorite_border</span>
                      </button>
                      <h3 className="text-[16px] font-medium text-text-main line-clamp-1 mb-2 hover:text-primary transition-colors">
                        <Link to={`/product/${p.id}`}>{p.name}</Link>
                      </h3>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[20px] font-semibold text-text-main tracking-tight">${p.price.toFixed(2)}</span>
                        {p.originalPrice && <span className="text-[16px] text-[#8B96A5] line-through font-semibold">${p.originalPrice.toFixed(2)}</span>}
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-[#FF9017]">
                          {[1, 2, 3, 4, 5].map(i => (
                            <span key={i} className={`material-icons text-[18px]`}>{i <= Math.floor(p.rating) ? 'star' : 'star_border'}</span>
                          ))}
                        </div>
                        <span className="text-[#FF9017] text-[16px] font-normal">{p.rating}</span>
                        <span className="w-1.5 h-1.5 bg-[#DEE2E7] rounded-full mx-2"></span>
                        <span className="text-[#8B96A5] text-[16px]">{p.soldCount} orders</span>
                        <span className="w-1.5 h-1.5 bg-[#DEE2E7] rounded-full mx-2"></span>
                        <span className="text-secondary text-[16px]">Free Shipping</span>
                      </div>
                      <p className="text-[#505050] text-[16px] leading-[24px] line-clamp-2 mb-4">
                        {p.description} Experience premium quality and modern design with this exclusive electronic item, crafted for durability and high performance.
                      </p>
                      <Link to={`/product/${p.id}`} className="text-primary font-medium text-[16px] hover:underline">View details</Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 bg-white border border-border-main rounded-md shadow-sm">
                <span className="material-icons-outlined text-5xl text-gray-200 mb-4">search_off</span>
                <h3 className="text-xl font-bold text-gray-400">No products found</h3>
                <p className="text-text-muted">Try adjusting your filters or search query.</p>
                <button onClick={clearAllFilters} className="mt-6 text-primary font-bold hover:underline">Clear all filters</button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mt-8 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 text-[15px]">Show</span>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-border-main rounded-md px-3 py-1.5 pr-8 text-sm outline-none cursor-pointer h-9">
                      <option>Show 10</option>
                      <option>Show 20</option>
                      <option>Show 50</option>
                    </select>
                    <span className="material-icons absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">expand_more</span>
                  </div>
                </div>
                <nav className="flex rounded-md border border-border-main bg-white divide-x overflow-hidden shadow-sm">
                  <button className="px-3 h-9 flex items-center hover:bg-gray-50 transition-colors text-gray-400"><span className="material-icons-outlined text-[20px]">chevron_left</span></button>
                  <button className="px-4 h-9 flex items-center bg-[#EFF2F4] font-bold text-text-main">1</button>
                  <button className="px-4 h-9 flex items-center hover:bg-gray-50 transition-colors text-gray-600">2</button>
                  <button className="px-4 h-9 flex items-center hover:bg-gray-50 transition-colors text-gray-600">3</button>
                  <button className="px-3 h-9 flex items-center hover:bg-gray-50 transition-colors text-text-main"><span className="material-icons-outlined text-[20px]">chevron_right</span></button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
