import React, { useState, useEffect } from 'react';
import { db } from '../../authentication/firebase.js';  
import { collection, onSnapshot } from 'firebase/firestore';
import { MapPin, Calendar, Star, Music, Users, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllArtists = () => {
  const navigate = useNavigate();
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [filters, setFilters] = useState({
    location: 'all',
    type: 'all',
    rating: 'all',
  });

  const locations = ['all', 'Hyderabad', 'Bangalore'];
  const types = ['all', 'singer', 'band', 'stand-up comedian'];
  const ratings = ['all', '4.8+', '4.5+', '4.0+'];

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'artists'), (snapshot) => {
      const artistList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArtists(artistList);
      setFilteredArtists(artistList);
    });
    return () => unsubscribe();
  }, []);

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
  }, [filters, artists]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const getArtistTypeIcon = (type) => {
    switch (type) {
      case 'singer': return <Mic className="w-5 h-5" />;
      case 'band': return <Users className="w-5 h-5" />;
      case 'stand-up comedian': return <Music className="w-5 h-5" />;
      default: return <Music className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bronze-start to-bronze-end">
            Discover Artists
          </h2>
          <div className="flex flex-wrap gap-4">
            {['location', 'type', 'rating'].map((filter, index) => (
              <div key={index} className="space-y-2">
                <label className="text-md text-gray-600 px-2">{filter.charAt(0).toUpperCase() + filter.slice(1)}</label>
                <select
                  value={filters[filter]}
                  onChange={(e) => handleFilterChange(filter, e.target.value)}
                  className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700"
                >
                  {(filter === 'location' ? locations : filter === 'type' ? types : ratings).map(option => (
                    <option key={option} value={option === 'all' ? 'all' : (filter === 'rating' ? parseFloat(option) : option)}>
                      {option === 'all' ? `All ${filter.charAt(0).toUpperCase() + filter.slice(1)}` : option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map(artist => (
            <div key={artist.id} className="relative group bg-gray-800 rounded-xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src={artist.photo || '/default-image.jpg'}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{artist.name}</h3>
                    <div className="flex items-center gap-2 text-gray-800 mt-1">
                      {getArtistTypeIcon(artist.type)}
                      <span className="capitalize">{artist.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-yellow-400">{artist.rating || 'N/A'}</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {artist.location || 'Unknown'}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Available: {Array.isArray(artist.availableDays) ? artist.availableDays.join(', ') : 'Not specified'}
                  </div>
                  <div>Experience: {artist.experience ? `${artist.experience}+ shows` : 'N/A'}</div>
                </div>
                <button onClick={() => navigate('/contactus')} className="w-full py-3 px-4 bg-gradient-to-r from-bronze-start to-bronze-end rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-800">No artists found matching your filters</h3>
            <p className="text-gray-900 mt-2">Try adjusting your filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllArtists;
