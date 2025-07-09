import { useState, useEffect } from 'react';
import { Service } from '@/types/services';

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = () => {
    const saved = localStorage.getItem('services');
    if (saved) {
      setServices(JSON.parse(saved));
    }
    setIsLoading(false);
  };

  const saveServices = (newServices: Service[]) => {
    setServices(newServices);
    localStorage.setItem('services', JSON.stringify(newServices));
  };

  const addService = (service: Omit<Service, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newService: Service = {
      ...service,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    saveServices([...services, newService]);
    return newService;
  };

  const updateService = (id: string, updates: Partial<Service>) => {
    const newServices = services.map(service =>
      service.id === id
        ? { ...service, ...updates, updatedAt: new Date().toISOString() }
        : service
    );
    saveServices(newServices);
  };

  const deleteService = (id: string) => {
    const newServices = services.filter(service => service.id !== id);
    saveServices(newServices);
  };

  const toggleServiceStatus = (id: string) => {
    updateService(id, { isActive: !services.find(s => s.id === id)?.isActive });
  };

  return {
    services,
    isLoading,
    addService,
    updateService,
    deleteService,
    toggleServiceStatus
  };
};