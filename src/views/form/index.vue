<template>
  <div>
    <JcForm
      ref="form"
      label-width="100px"
      :options="options"
      @on-change="handleChange"
      @before-upload="handleBeforeUpload"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @before-remove="beforeRemove"
      @on-exceed="handleExceed"
      @on-success="handleSuccess"
    >
      <template #uploadArea>
        <el-button type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="font-size: 12px; color: #ccc">jpg/png files with a size less than 500KB.</div>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
    </JcForm>
  </div>
</template>

<script lang="ts" setup>
import { FormOptions, FormInstance } from '@/components/Form/src/types/types'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'

interface Scope {
  form: FormInstance
  model: any
}

const options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur',
      },
      {
        min: 2,
        max: 6,
        required: true,
        message: '用户名在2-6之间',
        trigger: 'blur',
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    prop: 'password',
    placeholder: '请输入密码',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur',
      },
      {
        min: 6,
        max: 15,
        required: true,
        message: '密码在6-15之间',
        trigger: 'blur',
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    },
  },
  {
    type: 'select',
    value: '',
    label: '职位',
    placeholder: '请选择职位',
    prop: 'role',
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'change',
      },
    ],
    attrs: {
      clearable: true,
      style: { width: '100%' },
    },
    children: [
      {
        type: 'option',
        label: '经理',
        value: '1',
      },
      {
        type: 'option',
        label: '主管',
        value: '2',
      },
      {
        type: 'option',
        label: '员工',
        value: '3',
      },
    ],
  },
  {
    type: 'checkbox-group',
    value: [],
    label: '爱好',
    prop: 'like',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'change',
      },
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1',
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2',
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3',
      },
    ],
  },
  {
    type: 'radio-group',
    value: '',
    label: '性别',
    prop: 'gender',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'change',
      },
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male',
      },
      {
        type: 'radio',
        label: '女',
        value: 'female',
      },
      {
        type: 'radio',
        label: '保密',
        value: 'not',
      },
    ],
  },
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      multiple: true,
      limit: 2,
    },
    rules: [
      {
        required: true,
        message: '文件不能为空',
        trigger: 'blur',
      },
    ],
  },
  {
    type: 'editor',
    value: '',
    label: '描述',
    prop: 'desc',
    placeholder: '请输入描述',
    rules: [
      {
        required: true,
        message: '描述不能为空',
        trigger: 'blur',
      },
    ],
  },
]

const form = ref()

const submitForm = (scope: Scope) => {
  scope.form.validate(valid => {
    if (valid) {
      console.log(scope.model)
      ElMessage.success('提交成功')
    } else {
      ElMessage.error('表单填写有误，请检查')
    }
  })
}

// 重置表单
const resetForm = () => {
  form.value.resetFields()
}

const handleRemove = (val: any) => {
  console.log('remove')
  console.log(val)
}

const handlePreview = (val: any) => {
  console.log('preview')
  console.log(val)
}

const handleExceed = (val: any) => {
  console.log('exceed')
  console.log(val)
}

const beforeRemove = (val: any) => {
  console.log('beforeRemove')
  return ElMessageBox.confirm(`Cancel the transfer of ${val.uploadFile.name} ?`).then(
    () => true,
    () => false
  )
}

const handleSuccess = (val: any) => {
  console.log('success')
  console.log(val)
}

const handleChange = (val: any) => {
  console.log('on-change')
  console.log(val)
}

const handleBeforeUpload = (val: any) => {
  console.log('before-upload')
  console.log(val)
}
</script>


