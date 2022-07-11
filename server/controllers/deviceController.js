const uuid = require('uuid')//пакет который генерирует случайные id
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const { dirname } = require('path')


class DeviceController {
    async create(req, res, next){
        try{
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"//генерируем уникальное имя файла
            img.mv(path.resolve(__dirname, '..', 'static', fileName))//для того чтобы переместить файл с нужным именем в папку static
            
            if(info) {
                info = JSON.parse(info)
                info.forEach(i => 
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id

                    })
                );
            }
            
            
            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
   
    //Возвращаем все Устройства
    async getAll(req, res){
        const {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devises
        if (!brandId && !typeId) {
            devises = await Device.findAndCountAll(limit, offset)
        }

        if (brandId && !typeId) {
            devises = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }

        if (!brandId && typeId){
            devises = await Device.findAndCountAll({where:{typeId},  limit, offset})
        }

        if (brandId && typeId) {
            devises = await Device.findAndCountAll({where:{typeId, brandId},  limit, offset})
        }
        return res.json(devises)
    }

    //Возвращаем только одно Устройство
    async getOne(req, res){
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }, 
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()