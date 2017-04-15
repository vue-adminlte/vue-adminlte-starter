<template>
  <div class="">
    <div class="row ayx-textbox"
         :class="[validationStatus]">
      <label v-if="label"
             for="mytextbox"
             class="ayx-textbox-label"
             :class="labelWidthClass">{{label}}</label>
      <div :class="textWidthClass">
        <span v-if="showAddon"
              class="input-group-addon"><i v-if="addonIcon" :class="addonIcon"></i>{{addonText}}</span>
        <input type="text"
               v-model="nowText"
               :disabled="disabled"
               class="form-control"
               id="mytextbox"
               :placeholder="placeholder"
               @change="onChange($event.target.value)"
               @input="onInput($event.target.value)"
               @focus="$emit('focus')"
               @blur="emit('blur')">
      </div>
    </div>
    <div :class="validationStatus">
      <span v-show="showError"
            class="help-block">{{errorText}}</span>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.nowText = this.text
  },
  data() {
    return {
      validationStatus: '',
      validationResult: true,
      errorText: undefined,
      nowText: ''
    }
  },
  watch: {
    text(v) {
      this.nowText = v
    }
  },
  computed: {
    labelWidthClass() {
      return this.labelWidth ? `col-sm-${this.labelWidth}` : 'col-sm-1'
    },
    textWidthClass() {
      if (!this.label) {
        return ''
      }
      if (this.textWidth) {
        return `col-sm-${this.textWidth}`
      } else if (this.labelWidth) {
        return `col-sm-${12 - this.labelWidth}`
      } else {
        return 'col-sm-11'
      }
    },
    showError() {
      return this.errorText && this.errorText != ''
    },
    showAddon() {
      return this.addonIcon || this.addonText
    }
  },
  props: {
    label: {
      type: String,
      default: null
    },
    text: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: Number,
      default: undefined
    },
    textWidth: {
      type: Number,
      default: undefined
    },
    validation: {
      type: Function,
      default: undefined
    },
    addonIcon: {
      type: String,
      default: undefined
    },
    addonText: {
      type: String,
      default: undefined
    }
  },
  methods: {
    onChange(v) {
      if (this.validation) {
        var result = this.validation(v)
        this.errorText = result.text
        if (result.success) {
          this.validationStatus = result.status ? result.status : ''
        } else {
          this.validationStatus = result.status ? result.status : 'has-error'
        }
        if (this.validationResult != result.success) {
          this.validationResult = result.success
          this.$emit('validationChange', this.validationResult)
        }
      }
      this.$emit('change', v)
    },
    onInput(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style>
.ayx-textbox-label{
  text-align: right;
}

.ayx-textbox{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>