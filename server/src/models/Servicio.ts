import mongoose, { Schema, Document } from 'mongoose';

export interface IServicio extends Document {
  nombre: string;
  descripcion: string;
  precio: number;
  duracion_minutos: number;
  categoria: string;
  disponible: boolean;
}

const ServicioSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  duracion_minutos: { type: Number, required: true },
  categoria: { type: String, required: true },
  disponible: { type: Boolean, default: true },
}, { timestamps: true });

export const Servicio = mongoose.model<IServicio>('Servicio', ServicioSchema);