export interface Planet {
  id: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
}
export interface PlanetsResponse {
  planets: Planet[];
}

export interface PlanetResponse {
  planet: Planet;
}
