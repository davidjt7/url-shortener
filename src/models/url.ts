"use strict";
import { DataTypes, Model, Sequelize } from "sequelize";

export class Urls extends Model {
  public longUrl!: string;
  public shortId!: string;
  public createdAt!: Date;
}
export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  Urls.init(
    {
      longUrl: dataTypes.STRING,
      shortId: dataTypes.STRING,
      createdAt: dataTypes.DATE,
    },
    {
      sequelize,
      tableName: "urls"
    }
  );
  return Urls;
};
