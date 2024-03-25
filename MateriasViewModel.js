import { materiasCarrera1, materiasCarrera2 } from '../models/MateriaModel';

class MateriasViewModel {
  getCarreraMaterias(carrera) {
    return carrera === 1 ? materiasCarrera1 : materiasCarrera2;
  }
}

export default MateriasViewModel;
