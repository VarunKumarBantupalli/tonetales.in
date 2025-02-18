import React, { useState, useEffect } from 'react';
import { artists } from '../../javascript/data/artists.js'
import { MapPin, Calendar, Star, Music, Users, Mic } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const AllArtists = () => {

  const navigate = useNavigate();

  const [filteredArtists, setFilteredArtists] = useState(artists);
  const [filters, setFilters] = useState({
    location: 'all',
    type: 'all',
    rating: 'all'
  });

  const locations = ['all', 'Hyderabad', 'Bangalore'];
  const types = ['all', 'singer', 'band', 'stand-up comedian'];
  const ratings = ['all', '4.8+', '4.5+', '4.0+'];

  useEffect(() => {
    let result = artists;
    
    if (filters.location !== 'all') {
      result = result.filter(artist => artist.location === filters.location);
    }
    
    if (filters.type !== 'all') {
      result = result.filter(artist => artist.type === filters.type);
    }

    if (filters.rating !== 'all') {
      const minRating = parseFloat(filters.rating);
      result = result.filter(artist => artist.rating >= minRating);
    }
    
    setFilteredArtists(result);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const getArtistTypeIcon = (type) => {
    switch(type) {
      case 'singer':
        return <Mic className="w-5 h-5" />;
      case 'band':
        return <Users className="w-5 h-5" />;
      case 'stand-up comedian':
        return <Music className="w-5 h-5" />;
      default:
        return <Music className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen  text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Filters Section */}
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bronze-start to-bronze-end">
            Discover Artists
          </h2>
          
          <div className="flex flex-wrap gap-4">
            {/* Location Filter */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Location</label>
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location.charAt(0).toUpperCase() + location.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Artist Type Filter */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Artist Type</label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber
                focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Rating</label>
              <select
                value={filters.rating}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-amber focus:border-transparent"
              >
                {ratings.map(rating => (
                  <option key={rating} value={rating === 'all' ? 'all' : parseFloat(rating)}>
                    {rating === 'all' ? 'All Ratings' : `${rating} Stars`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map(artist => (
            <div key={artist.id} className="relative group">          
              
              {/* Artist Card */}
              <div className="relative bg-gray-800 rounded-xl overflow-hidden">
                {/* Artist Image */}
                <div className="relative h-64">
                  <img
                    src={artist.photo}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                {/* Artist Info */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{artist.name}</h3>
                      <div className="flex items-center gap-2 text-gray-400 mt-1">
                        {getArtistTypeIcon(artist.type)}
                        <span className="capitalize">{artist.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-yellow-400">{artist.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-300">

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {artist.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Available: {artist.availableDays.join(', ')}
                    </div>
                    <div>Experience: {artist.experience}+ shows</div>
                  </div>

                  <button onClick={() => navigate('/contactus')} className="w-full py-3 px-4 bg-gradient-to-r from-bronze-start to-bronze-end rounded-lg font-medium text-white hover:from-gold-light hover:via-gold-medium hover:to-gold-end transition duration-300 transform hover:scale-[1.02]">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-400">No artists found matching your filters</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllArtists;