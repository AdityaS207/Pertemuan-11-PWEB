import { CollectionConfig } from 'payload/types'

const Mahasiswa: CollectionConfig = {
  access: {
    read: () => true
  },
  slug: 'mahasiswa',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name : "nama",
      type : "text",
      label : "Nama",
      required : true
    },
    {
      name : "nrp",
      type : "text",
      label : "NRP",
      required : true
    }
  ],
}

export default Mahasiswa
