// libraries
import React from 'react';

class JScreenResume extends React.Component {

    componentDidMount() {
        this.props.onRemoteFetchVacancyList();
    }

    render() {
        return (
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at, autem consequuntur ex maiores repellat tenetur velit veniam. Consequuntur corporis dolorem fugit maxime molestiae perspiciatis quos repellendus veniam voluptas voluptates.
            </div>
        );
    }

}

export default JScreenResume;