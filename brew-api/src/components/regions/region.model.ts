import { Document, Model, model, Schema } from 'mongoose';
import { IRegion } from './region.interface';

const RegionSchema: Schema = new Schema({
    name: String,
    places: [String]
});

export interface IRegionModel extends IRegion, Document {
}

export const Region: Model<IRegionModel> = model<IRegionModel>('Region', RegionSchema);
