// src/viewmodels/LandViewModel.ts

import { useState, useEffect } from 'react';
import { Land } from './LandModel';
import LandRepository from './LandRepository';  


const useLandViewModel = () => {
  const [lands, setLands] = useState<Land[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    LandRepository.initialize();
    fetchLands();
  }, []);

  const fetchLands = async (): Promise<void> => {
    setLoading(true);
    try {
      LandRepository.getAllLands((data) => {
        setLands(data);
      });
    } catch (error) {
      console.error('Error fetching lands', error);
    } finally {
      setLoading(false);
    }
  };

  const addLand = async (land: Land): Promise<void> => {
    try {
      LandRepository.addLand(land.name, land.size, land.soilType, () => {
        fetchLands();
      });
      fetchLands();
    } catch (error) {
      console.error('Error adding land', error);
    }
  };

  const deleteLand = async (id: number): Promise<void> => {
    try {
      LandRepository.deleteLand(id, () => {
        fetchLands();
      });
      fetchLands();
    } catch (error) {
      console.error('Error deleting land', error);
    }
  };

  return {
    lands,
    loading,
    addLand,
    deleteLand,
  };
};

export default useLandViewModel;
