import { Document, Model, model, Schema } from 'mongoose';
import { IBrewery } from '../../interfaces/brewery';

const BrewerySchema: Schema = new Schema({
    region: String,
    place: String,
    name: String,
    url: String,
    address: String
});

export interface IBreweryModel extends IBrewery, Document {
}

export const Brewery: Model<IBreweryModel> = model<IBreweryModel>('Brewery', BrewerySchema);
