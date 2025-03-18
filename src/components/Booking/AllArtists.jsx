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
  });

  const locations = ['all', 'Hyderabad', 'Bangalore'];
  const types = ['all', 'Singer', 'Band', 'Musician'];

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
      result = result.filter(artist => artist.Location === filters.location);
    }
    if (filters.type !== 'all') {
      result = result.filter(artist => artist.Type === filters.type);
    }
    setFilteredArtists(result);
  }, [filters, artists]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const getArtistTypeIcon = (type) => {
    switch (type) {
      case 'Singer': return <Mic className="w-5 h-5 text-white" />;
      case 'Band': return <Users className="w-5 h-5 text-white" />;
      default: return <Music className="w-5 h-5 text-white" />;
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
            {['location', 'type'].map((filter, index) => (
              <div key={index} className="space-y-2">
                <label className="text-md text-gray-600 px-2">{filter.charAt(0).toUpperCase() + filter.slice(1)}</label>
                <select
                  value={filters[filter]}
                  onChange={(e) => handleFilterChange(filter, e.target.value)}
                  className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700"
                >
                  {(filter === 'location' ? locations : types).map(option => (
                    <option key={option} value={option}>{option === 'all' ? `All ${filter.charAt(0).toUpperCase() + filter.slice(1)}` : option}</option>
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
                  src={artist.Image || '/default-image.jpg'}
                  alt={artist.Name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{artist.Name}</h3>
                <div className="flex items-center gap-2 text-gray-800 mt-1">
                {getArtistTypeIcon(artist.Type)}
                
                  <span className="capitalize text-gray-300">{artist.Type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MapPin className="w-4 h-4" />
                  {artist.Location || 'Unknown'}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Calendar className="w-4 h-4" />
                  Available: {artist.Available || 'Not specified'}
                </div>
                <div className="text-sm text-gray-300">Experience: {artist.Experience ? `${artist.Experience}+ Shows` : 'N/A'}</div>
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
