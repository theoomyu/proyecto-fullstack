import mongoose, { Schema, Document } from 'mongoose';

export interface IUsuario extends Document {
  nombre: string;
  email: string;
  password: string;
  rol: string;
}

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, default: 'cliente' }
}, { timestamps: true });

export const Usuario = mongoose.model<IUsuario>('Usuario', UsuarioSchema);