import Editor from './Editor';

export default class IconEditor extends Editor {
    static title = 'Edit Icon';
    
    init() {
        this.state = {
            ...(this.state),
            icon: (this.el.className || '')
        };
    }

    render() {
        const wrapper = this.ui.els.div();

        wrapper.appendChild(this.ui.ins.text({name: 'icon', label: 'Icon'}, this.state.icon, this.setStateValue));
        wrapper.appendChild(this.buildAttributesFields());
        
        return wrapper;
    }

    onSave() {
        Editor.prototype.onSave.call(this);
        
        this.el.className = this.state.icon;
    }
}