<!--Created by Hazard on 2020/6/11.-->
<template>
  <el-form-item v-bind="itemProps(mItem)"
                :class="[
                {'is-required': isRequired},
                mItem.col ? 'col-' + mItem.col : '', mItem.prop, mItem.class,
                {'is-disabled': mItem.props && mItem.props.disabled}
                ]"
                v-loading="loading">
    <!--选择框-->
    <cc-select v-model="model[mItem.prop]" v-bind="mItem.props" :options="mItem.options" v-if="mItem.type === 'select'" v-on="$listeners"></cc-select>
    <!--日期，范围-->
    <el-date-picker v-model="model[mItem.prop]" v-bind="mItem.props" :type="mItem.type"
                    v-else-if="['date', 'datetime', 'daterange', 'datetimerange'].includes(mItem.type)"
                    :value-format="datePickerFarmatter(mItem)" v-on="$listeners"></el-date-picker>
    <!--时间选择-->
    <el-time-select v-model="model[mItem.prop]" v-bind="mItem.props" v-else-if="mItem.type=== 'timeselect'" v-on="$listeners">
    </el-time-select>
    <!--时间、范围-->
    <el-time-picker v-model="model[mItem.prop]" v-bind="mItem.props" :is-range="mItem.type === 'timerange'"
                    v-else-if="['time', 'timerange'].includes(mItem.type)"
                    :value-format="mItem.props && mItem.props.valueFormat ? mItem.props.valueFormat : 'HH:mm:ss'" v-on="$listeners">
    </el-time-picker>
    <!--开关-->
    <el-switch v-model="model[mItem.prop]" v-bind="mItem.props" v-else-if="mItem.type === 'switch'" v-on="$listeners"></el-switch>
    <!--单选-->
    <el-radio-group v-model="model[mItem.prop]" v-bind="mItem.props" v-else-if="mItem.type === 'radio'" v-on="$listeners">
      <template v-if="mItem.options && typeof mItem.options !== 'string'">
        <el-radio v-bind="option" :label="option.value" :name="mItem.prop" :key="option.value" v-for="option in mItem.options">{{option.label}}</el-radio>
      </template>
      <label class="el-radio c-danger ca">{{mItem.text}}</label>
    </el-radio-group>
    <!--单选-按钮-->
    <el-radio-group v-model="model[mItem.prop]" v-bind="mItem.props" v-else-if="mItem.type === 'radiobutton'" v-on="$listeners">
      <template v-if="mItem.options && typeof mItem.options !== 'string'">
        <el-radio-button v-bind="option" :label="option.value" :name="mItem.prop" :key="option.value" v-for="option in mItem.options">{{option.label}}</el-radio-button>
      </template>
    </el-radio-group>
    <!--多选-->
    <cc-checkbox-group v-model="model[mItem.prop]" v-bind="mItem.props" :options="mItem.options" :type="mItem.type"
                       v-else-if="['checkbox', 'checkboxbutton'].includes(mItem.type)" v-on="$listeners"></cc-checkbox-group>
    <!--级联选择器-->
    <template v-else-if="mItem.type === 'cascader'">
      <el-cascader v-model="model[mItem.prop]" :options="typeof mItem.options === 'string' ? [] : mItem.options" v-bind="mItem.props" v-if="mItem.options" v-on="$listeners"/>
    </template>
    <!--计数器-->
    <!--<el-input-number v-model="model[mItem.prop]" v-bind="mItem.props" v-else-if="mItem.type === 'number'" v-on="$listeners"></el-input-number>-->
    <cc-input-number v-model="model[mItem.prop]" v-bind="mItem.props" v-else-if="mItem.type === 'number'" v-on="$listeners"></cc-input-number>
    <!--滑块-->
    <el-slider v-model="model[mItem.prop]" v-bind="mItem.props" v-else-if="mItem.type === 'slider'" v-on="$listeners"></el-slider>
    <!--评分-->
    <el-rate v-model="model[mItem.prop]" v-bind="mItem.props" v-else-if="mItem.type === 'rate'" v-on="$listeners"></el-rate>
    <!--popover-table-->
    <template v-else-if="mItem.type === 'table'">
      <cc-input-table v-model="model[mItem.prop]" v-bind="mItem.props" :options="typeof mItem.options === 'string' ? {} : mItem.options" v-if="mItem.options" v-on="$listeners"></cc-input-table>
    </template>
    <!--popover-tree-->
    <template v-else-if="mItem.type === 'tree'">
      <cc-input-tree v-model="model[mItem.prop]" v-bind="mItem.props" :options="typeof mItem.options === 'string' ? [] : mItem.options" v-if="mItem.options" v-on="$listeners"></cc-input-tree>
    </template>
    <!--弹出dialog-->
    <cc-input-dialog @input="onValueChange(mItem.prop)" :title="mItem.label" v-model="model[mItem.prop]" v-bind="mItem.props" :dialog="typeof mItem.options === 'string' ? {} : mItem.options" v-else-if="mItem.type === 'dialog'"  v-on="$listeners"></cc-input-dialog>
    <!--icon-->
    <cc-input-icon v-model="model[mItem.prop]" v-bind="mItem.props" v-else-if="mItem.type === 'icon'" v-on="$listeners"></cc-input-icon>
    <!--color-->
    <el-color-picker v-model="model[mItem.prop]" v-bind="mItem.props" v-else-if="mItem.type === 'color'" v-on="$listeners" :predefine="['#53beea', '#49a361', '#e79f3c', '#cd5542']"></el-color-picker>
    <div v-else-if="mItem.type === 'view'">
      <template v-if="item.formatter">
        {{item.formatter(model, mItem.prop, model[mItem.prop])}}
      </template>
      <template v-else-if="item.renderCell">
        <cc-render :renderFun="item.renderCell"></cc-render>
      </template>
      <template v-else>{{mItem.value || model[mItem.prop]}}</template>
    </div>
    <el-autocomplete v-model="model[mItem.prop]" v-bind="mItem.props" :fetch-suggestions="item.props.fetchSuggestions"  v-else-if="mItem.type === 'autocomplete'" v-on="$listeners"></el-autocomplete>
    <cc-input-tags :label="mItem.props.label" v-else-if="mItem.type === 'tags'" v-model="model[mItem.prop]" v-bind="mItem.props" v-on="$listeners" icon="table"></cc-input-tags>
    <!--input-->
    <oss-upload ref="upload" v-else-if="mItem.type === 'upload'" v-model="model[mItem.prop]" v-bind="mItem.props"></oss-upload>
    <template v-else>
      <el-input v-model.number="model[mItem.prop]" v-bind="mItem.props" :type="mItem.type" v-if="isNumber(mItem.verify)" clearable v-on="$listeners">
        <template v-if="mItem.props.append" slot="append">{{mItem.props.append}}</template>
      </el-input>
      <el-input v-model="model[mItem.prop]" @click.native="$emit('click')" v-bind="mItem.props" :type="mItem.type" v-else clearable v-on="$listeners">
        <template v-if="mItem.props.append" slot="append">{{mItem.props.append}}</template>
      </el-input>
    </template>
  </el-form-item>
</template>

<script>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import CcInputTable from './CcInputTable.vue'
import CcInputTree from './CcInputTree.vue'
import CcInputDialog from './CcInputDialog.vue'
import CcInputIcon from './CcInputIcon.vue'
import CcCheckboxGroup from './CcCheckboxGroup.vue'
import CcSelect from './CcSelect.vue'
import { Action } from 'vuex-class'

export default @Component({ components: { CcInputTable, CcInputTree, CcInputDialog, CcInputIcon, CcCheckboxGroup, CcSelect } })
class CcFormItem extends Vue {
    /* vue-props */
    @Prop({ required: true, type: [Object] }) model
    @Prop({ required: true }) item
    @Prop(Boolean) noVerify
    /* vue-vuex */
    @Action('getOptions') getOptions
    @Action getPageOptions
    @Action requestUrl
    /* vue-data */
    loading = false
    data () {
      return {
        mItem: JSON.parse(JSON.stringify(this.item))
      }
    }
    /* vue-compute */
    get isRequired () {
      return !this.noVerify && !!this.verify && this.mItem.canBeEmpty === undefined
    }
    /* vue-watch */
    @Watch('item')
    itemChange () {
      this.mItem = JSON.parse(JSON.stringify(this.item))
    }
    @Watch('mItem', { immediate: true })
    mItemChange () {
      this.initOptions()
    }
    /* vue-lifecycle */
    /* vue-method */
    // 过滤form-item的props
    itemProps (item) {
      const { options, props, dialog, verify, placeholder, multiSelect, formatter, renderCell, ...itemProps } = item
      item.props = item.props || {}
      if (placeholder) {
        item.props.placeholder = placeholder
      }
      if (multiSelect) {
        item.props.multiSelect = multiSelect
      }
      if (this.noVerify) {
        return { ...itemProps }
      } else {
        // 处理表单校验
        if (verify) {
          verify.verify = ''
          // 校验框架没有必填选项，只有canBeEmpty，所以转换一下
          if (!verify.required) {
            verify.canBeEmpty = ''
          }
        }
        // console.log({ ...itemProps, ...verify })
        this.verify = verify
        return { ...itemProps, ...verify }
      }
    }
    // 日期控件默认格式
    datePickerFarmatter (item) {
      if (item.props && item.props.valueFormat) {
        return item.props.valueFormat
      } else {
        return (item.type === 'date' || item.type === 'daterange') ? 'yyyy-MM-dd' : 'yyyy-MM-dd HH:mm:ss'
      }
    }
    // 检查输入框的值是否是number，以判断是否要加number修饰符
    isNumber (verify) {
      return verify && (verify.number || verify.int || verify.maxDecimalLength || verify.gt || verify.gte || verify.lt || verify.lte)
    }
    // 在dialog的值变化的时候，触发一次校验
    onValueChange (prop) {
      this.$emit('value-change', prop)
    }
    //
    async initOptions () {
      if (this.mItem.options && typeof this.mItem.options === 'string') {
        this.loading = true
        const type = this.mItem.type
        let data = null

        // 先在常量表里面找有没有值
        if (this.$c.options[this.mItem.options]) {
          data = this.$c.options[this.mItem.options]
        } else {
          if (this.mItem.options.indexOf('/') === 0) {
            // data = await this.requestUrl(this.mItem.options)
            data = await this.requestUrl({url: this.mItem.options, params: this.mItem.optionsProps})
          } else {
            if (type === 'dialog') {
              data = await this.getPageOptions(this.mItem.options)
            } else if (this.mItem.options.startsWith('action:')) {
              data = await this.$store.dispatch(this.mItem.options.substr(7))
            } else if (this.mItem.options === 'action') {
              data = await this.$store.dispatch(this.mItem.optionsProps.actionName, this.mItem.optionsProps.actionParams)
            } else {
              data = await this.getOptions('options?code=' + this.mItem.options + '&type=' + type)
            }
          }
        }
        this.loading = false
        if (data) {
          data = data.data || data
          this.mItem.options = data
        }
      }
    }
}
</script>

<style lang="scss" scoped>
</style>
