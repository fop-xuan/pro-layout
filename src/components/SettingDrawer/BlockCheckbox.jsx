import PropTypes from 'ant-design-vue/es/_util/vue-types'
import { Tooltip, Icon } from 'ant-design-vue'
import { defaultI18nRender } from './index'

const BlockCheckboxProps = {
  value: PropTypes.string,
  // Item: { key, url, title }
  list: PropTypes.array,
}

const baseClassName = 'ant-pro-setting-drawer-block-checbox'


const BlockCheckbox = {
  props: BlockCheckboxProps,
  inject: ['locale'],
  render (h) {
    const { value, list } = this
    const i18n = this.$props.i18nRender || this.locale || defaultI18nRender

    const items = list || [
      {
        key: 'sidemenu',
        url:
          'https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg',
        title: i18n('app.setting.sidemenu'),
      },
      {
        key: 'topmenu',
        url:
          'https://gw.alipayobjects.com/zos/antfincdn/URETY8%24STp/KDNDBbriJhLwuqMoxcAr.svg',
        title: i18n('app.setting.topmenu'),
      },
    ]

    const handleChange = (key) => {
      this.$emit('change', key)
    }

    const disableStyle = {
      cursor: 'not-allowed'
    }

    return (
      <div class={baseClassName} key={value}>
        {items.map(item => (
          <Tooltip title={item.title} key={item.key}>
            <div class={`${baseClassName}-item`} style={ item.disable && disableStyle } onClick={() => !item.disable && handleChange(item.key)}>
              <img src={item.url} alt={item.key} />
              <div
                class={`${baseClassName}-selectIcon`}
                style={{
                  display: value === item.key ? 'block' : 'none'
                }}
              >
                <Icon type="check" />
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    )
  }
}

export default BlockCheckbox
