import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Forms } from 'components/Forms/Forms';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const saveContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({
      contacts: saveContacts ? saveContacts : [],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = data => {
    if (
      this.state.contacts.length &&
      this.state.contacts.find(item => item.name === data.name)
    )
      return alert(
        'Are you sure about that? "' + data.name + '" is already in contacts.'
      );

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    });
  };

  selectedContacts = text => {
    this.setState({
      filter: text.toLowerCase(),
    });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <Section>
        <Section title="Phonebook">
          <Forms submit={this.addContact} />
        </Section>

        {this.state.contacts.length > 0 && (
          <Section title="Contacts">
            <Contacts
              contacts={filterContacts}
              onSearch={this.selectedContacts}
              onDelete={this.deleteContact}
            />
          </Section>
        )}
      </Section>
    );
  }
}
